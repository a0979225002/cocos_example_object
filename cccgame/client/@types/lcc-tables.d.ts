
// generate by lcc-framework

declare module lcc$TABLES {

type TempType_0 = [
	number,
	string,
	number,
	number,
	number,
	string
];
type TempType_1 = {
	ID:number,
	name:string,
	attr:{
		force:number,
		intellect:number,
		speed:number
	},
	weapontype:string
};
export type rolesla = TempType_0[];
export type roleslo = TempType_1[];
export type roleslv = number[];
export type rolesma = {
	[T in '101' | '103' | '104']:TempType_0
};
export type rolesmo = {
	[T in '101' | '103' | '104']:TempType_1
};
export type rolesmv = {
	[T in '101' | '103' | '104']:number
};

}

