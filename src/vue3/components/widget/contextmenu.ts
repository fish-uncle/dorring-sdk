import { reactive } from 'vue'
import Manager from '@/core/Manager'
import WidgetLayer from '@/core/Widget/layer'

const manager: Manager = Manager.Instance()
const state = reactive({ manager })

export default (e: PointerEvent, widget: WidgetLayer) => {
	if (state.manager.screen.currentWidgets.length <= 1) {
		state.manager.screen.cancelSelectWidget()
		state.manager.screen.selectWidgetById(widget.id)
		state.manager.temporary.widgetRightMenu = false
		setTimeout(() => {
			state.manager.temporary.widgetRightMenu = true
		})
		state.manager.temporary.widgetRightMenuX = e.clientX
		state.manager.temporary.widgetRightMenuY = e.clientY
	}
	if (state.manager.screen.currentWidgets.length > 1) {
		state.manager.temporary.widgetsRightMenu = false
		setTimeout(() => {
			state.manager.temporary.widgetsRightMenu = true
		})
		state.manager.temporary.widgetsRightMenuX = e.clientX
		state.manager.temporary.widgetsRightMenuY = e.clientY
	}
}
