
/**
* generate by lcc-framework
*/
declare namespace lcc {

export namespace protocol {

/**
* from pack `resources`
*/
export const PROTOTEST:number;

export enum EnumTest {
	/**
	* from pack `resources`
	*/
	ENUM1,
	/**
	* from pack `resources`
	*/
	ENUM2,
	/**
	* from pack `resources`
	*/
	ENUM3,
}

/**
* from pack `resources`
*/
export interface RefTest {
	value:number;
}

/**
* from pack `resources`
*/
export interface ExtendTest {
	parent:string;
}

/**
* from pack `resources`
*/
export interface ProtoTest extends ExtendTest {
	from:string;
	version:number;
	isClient:boolean;
	isServer:boolean;
	ref?:RefTest;
	enumList:EnumTest[];
	enumMap:{[key:string]:EnumTest};
}

}

}
