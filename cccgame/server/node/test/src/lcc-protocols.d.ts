
/**
* generate by lcc-framework
*/
declare namespace lcc {

export namespace protocol {

/**
* from pack `resources`
*/
export const TYPESCRIPTTEST1:number;
/**
* from pack `resources`
*/
export const TYPESCRIPTTEST2:number;
/**
* from pack `resources`
*/
export const TYPESCRIPTTEST3:number;
/**
* from pack `resources`
*/
export const PROTOBUFFTEST:number;

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
export interface TypescriptTest1 {
	numberV?:number;
	numberG?:number[];
	numberM?:{[key:number]:number};
	stringV?:string;
	stringG?:string[];
	stringM?:{[key:string]:string};
	enumV?:EnumTest;
	enumG?:EnumTest[];
	enumM1?:{[key:number]:EnumTest};
	enumM2?:{[key:string]:EnumTest};
	booleanV?:boolean;
	booleanG?:boolean[];
	booleanM1?:{[key:number]:boolean};
	booleanM2?:{[key:string]:boolean};
	uint8arrayV?:Uint8Array|string;
	uint8arrayG?:Uint8Array[]|string[];
	uint8arrayM1?:{[key:number]:Uint8Array|string};
	uint8arrayM2?:{[key:string]:Uint8Array|string};
}

/**
* from pack `resources`
*/
export interface TypescriptTest2 {
	test1V?:TypescriptTest1;
	test1G?:TypescriptTest1[];
	test1M1?:{[key:number]:TypescriptTest1};
	test1M2?:{[key:string]:TypescriptTest1};
}

/**
* from pack `resources`
*/
export interface TypescriptTest3 extends TypescriptTest2 {
	test2V?:TypescriptTest2;
	test2G?:TypescriptTest2[];
	test2M1?:{[key:number]:TypescriptTest2};
	test2M2?:{[key:string]:TypescriptTest2};
}

/**
* from pack `resources`
*/
export interface ProtoBuffTest {
	floatV:number;
	doubleV:number;
	int32V:number;
	boolV:boolean;
	bytesV:Uint8Array|string;
	mapV1:{[key:string]:boolean};
	mapV2:{[key:number]:boolean};
}

}

}
