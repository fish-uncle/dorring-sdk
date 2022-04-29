﻿// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export class Singleton<T> {
	static Instance<T>(obj?: any): T {
		if (!window.cakeVEditorInstance) window.cakeVEditorInstance = {}
		if (!window.cakeVEditorInstance[this.name]) {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			window.cakeVEditorInstance[this.name] = new this(obj)
		}
		return window.cakeVEditorInstance[this.name]
	}
}

export default class Factory<T> extends Singleton<T> {}
