/*
Copyright 2021 LuJun

Permission is hereby granted, free of charge, to any person obtaining a copy 
of this software and associated documentation files (the "Software"), to deal 
in the Software without restriction, including without limitation the rights 
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell 
copies of the Software, and to permit persons to whom the Software is furnished 
to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in 
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR 
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL 
THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, 
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/


namespace lcc {

export namespace math {

const TAG = "lcc/utils/math.ts";

/**
 * @zh
 * 获得随机浮点值
 * 
 * @param min - 最小值
 * @param max - 最大值
 */
export function randomFloat(min:number, max:number){
	return Math.random() * (max - min + 1) + min;
}

/**
 * @zh
 * 获得随机整数值
 * 
 * @param min - 最小值
 * @param max - 最大值
 */
export function randomInt(min:number, max:number){
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * @zh
 * 随机获得数组中的值
 * 
 * @param elements - 元素数组
 */
export function randomElement(elements:any[]){
	let select = Math.floor(Math.random() * 100) % elements.length;
	return elements[select];
}

/**
 * @zh
 * 随机获得数组的几个值
 * 
 * @param elements - 元素数组
 * @param count - 数量
 */
export function randomElements(elements:any[], count:number) {
	var shuffled = elements.slice(0), i = elements.length, min = i - count, temp, index;
	while (i-- > min) {
		index = Math.floor((i + 1) * Math.random());
		temp = shuffled[index];
		shuffled[index] = shuffled[i];
		shuffled[i] = temp;
	}
	return shuffled.slice(min);
}

}

}
