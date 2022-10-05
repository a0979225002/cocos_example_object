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

export namespace js {

const TAG = "lcc/utils/js-buffer.ts";

/**
 * @zh
 * 缓冲读取对象
 */
export class BufferReader {

    /**
     * @zh
     * 缓冲对象
     */
	protected _buffer:ArrayBuffer = null;
	
	/**
	 * @zh
	 * 视图
	 */
	protected _view:DataView = null;

    /**
     * @zh
     * 当前索引
     */
    protected _index:number = 0;

    /**
     * @zh
     * 缓冲容量
     */
    protected _capacity:number = 0;

    /**
     * @zh
     * 构造缓冲读取类
     * 
     * @param buffer - 缓冲实体
     * @param index - 当前索引
     * @param capacity - 当前容量
     */
    constructor(buffer:ArrayBuffer, index:number = 0, capacity?:number){
		this._buffer = buffer;
		this._view = new DataView(buffer)
        this._index = index;
		this._capacity = capacity == null ? buffer.byteLength : capacity;
    }

    /**
     * @zh
     * 跳过长度字节
     * 
     * @param count - 字节数
     */
    public skip(count:number){
        this._index += count;
        if(this._index > this._capacity){
            this._index = this._capacity;
        }
    }

    /**
     * @zh
     * 缓冲区对齐
     * 
     * @param size - 对齐大小
     */
    public alignment(size:number){
        let rem = this._index % size;
        if(rem != 0){
            this.skip(size - rem);
        }
    }

    /**
     * @zh
     * 读取 Byte
     */
    public readByte(){
        let value = this._view.getInt8(this._index);
        this.skip(1);
        return value;
    }

    /**
     * @zh
     * 读取 unsigned Byte
     */
    public readUByte(){
        let value = this._view.getUint8(this._index);
        this.skip(1);
        return value;
    }

    /**
     * @zh
     * 查看 Byte
     */
    public peekByte(){
        return this._view.getInt8(this._index);
    }
    
    /**
     * @zh
     * 查看 unsigned Byte
     */
    public peekUByte(){
        return this._view.getUint8(this._index);
    }

    /**
     * @zh
     * 读取 Short
     */
    public readShort(){
        let value = this._view.getInt16(this._index, true);
        this.skip(2);
        return value;
    }

    /**
     * @zh
     * 读取 unsigned Short
     */
    public readUShort(){
        let value = this._view.getUint16(this._index, true);
        this.skip(2);
        return value;
    }

    /**
     * @zh
     * 查看 Short
     */
    public peekShort(){
        return this._view.getInt16(this._index, true);
    }
    
    /**
     * @zh
     * 查看 unsigned Short
     */
    public peekUShort(){
        return this._view.getUint16(this._index, true);
    }

    /**
     * @zh
     * 读取 Long
     */
    public readLong(){
        let value = this._view.getInt32(this._index, true);
        this.skip(4);
        return value;
    }

    /**
     * @zh
     * 读取 unsigned Long
     */
    public readULong(){
        let value = this._view.getUint32(this._index, true);
        this.skip(4);
        return value;
    }

    /**
     * @zh
     * 查看 Long
     */
    public peekLong(){
        return this._view.getInt32(this._index, true);
    }
    
    /**
     * @zh
     * 查看 unsigned Long
     */
    public peekULong(){
        return this._view.getUint32(this._index, true);
    }

    /**
     * @zh
     * 读取 Float
     */
    public readFloat(){
        let value = this._view.getFloat32(this._index, true);
        this.skip(4);
        return value;
    }

    /**
     * @zh
     * 查看 Float
     */
    public peekFloat(){
        return this._view.getFloat32(this._index, true);
    }
    
    /**
     * @zh
     * 读取 Double
     */
    public readDouble(){
        let value = this._view.getFloat64(this._index, true);
        this.skip(8);
        return value;
    }

    /**
     * @zh
     * 查看 Double
     */
    public peekDouble(){
        return this._view.getFloat64(this._index, true);
    }
    
    /**
     * @zh
     * 读取字符串，使用utf16le
     */
    public readString(){
		let len = this.readUShort();
        let str = js.ab2str(this.readData(len));
        return str;
    }

    /**
     * @zh
     * 缓冲区索引
     */
    public getIndex(){
        return this._index;
    }

    /**
     * @zh
     * 缓冲区剩余大小
     */
    public getRemainSize(){
        return this._capacity - this._index;
    }

    /**
     * @zh
     * 空闲缓冲大小
     */
    public getEmptySize(){
        return this._buffer.byteLength - this._capacity;
    }

    /**
     * @zh
     * 读取数据
     * 
     * @param count - 大小
     */
    public readData(count:number){
        if(count > 0){
            let buffer = this._buffer.slice(this._index, this._index + count);
            this.skip(count);
            return buffer;
        }
    }

    /**
     * @zh
     * 查看数据
     * 
     * @param count - 大小
     */
    public peekData(count:number){
        if(count > 0){
            return this._buffer.slice(this._index, this._index + count);
        }
    }
}

/**
 * @zh
 * 缓冲写入对象
 */
export class BufferWriter {

    /**
     * @zh
     * 缓冲数组
     */
    private _buffers:ArrayBuffer[] = [];

    /**
     * @zh
     * 缓冲大小
     */
    private _size:number = 0;

    /**
     * @zh
     * 获得缓冲大小
     */
    public getSize(){
        return this._size;
    }

    /**
     * @zh
     * 填充指定数量的字符
     * 
     * @param count - 字节数
     * @param char - 数值
     */
    public fill(count:number, char:number){
        if(count > 0){
			let buff = new ArrayBuffer(count);
			(new Int8Array(buff)).fill(char, 0, -1);
            this._buffers.push(buff);
            this._size += count;
        }
    }

    /**
     * @zh
     * 缓冲区对齐
     * 
     * @param size - 对齐字节数
     * @param char - 填充数值
     */
    public alignment(size, char){
        let rem = this._size % size;
        if(rem != 0){
            this.fill(rem, char);
        }
    }

    /**
     * @zh
     * 写入 Byte
     * 
     * @param byte - 数据
     */
    public writeByte(byte:number){
		let buff = new ArrayBuffer(1);
		(new DataView(buff)).setInt8(0, byte);
        this._buffers.push(buff);
        this._size += 1;
    }

    /**
     * @zh
     * 写入 unsigned Byte
     * 
     * @param byte - 数据
     */
    public writeUByte(byte:number){
		let buff = new ArrayBuffer(1);
		(new DataView(buff)).setUint8(0, byte);
        this._buffers.push(buff);
        this._size += 1;
    }

    /**
     * @zh
     * 写入 Short
     * 
     * @param Short - 数据
     */
    public writeShort(short:number){
		let buff = new ArrayBuffer(2);
		(new DataView(buff)).setInt16(0, short, true);
        this._buffers.push(buff);
        this._size += 2;
    }

    /**
     * @zh
     * 写入 unsigned Short
     * 
     * @param Short - 数据
     */
    public writeUShort(short:number){
        let buff = new ArrayBuffer(2);
		(new DataView(buff)).setUint16(0, short, true);
        this._buffers.push(buff);
        this._size += 2;
    }

    /**
     * @zh
     * 写入 Long
     * 
     * @param Long - 数据
     */
    public writeLong(long:number){
        let buff = new ArrayBuffer(4);
		(new DataView(buff)).setInt32(0, long, true);
        this._buffers.push(buff);
        this._size += 4;
    }

    /**
     * @zh
     * 写入 unsigned Long
     * 
     * @param Long - 数据
     */
    public writeULong(long:number){
        let buff = new ArrayBuffer(4);
		(new DataView(buff)).setUint32(0, long, true);
        this._buffers.push(buff);
        this._size += 4;
    }

    /**
     * @zh
     * 写入 unsigned Float
     * 
     * @param Float - 数据
     */
    public writeFloat(float:number){
		let buff = new ArrayBuffer(4);
		(new DataView(buff)).setFloat32(0, float, true);
        this._buffers.push(buff);
        this._size += 4;
    }

    /**
     * @zh
     * 写入 unsigned Double
     * 
     * @param Double - 数据
     */
    public writeDouble(double:number){
		let buff = new ArrayBuffer(8);
		(new DataView(buff)).setFloat64(0, double, true);
        this._buffers.push(buff);
        this._size += 8;
    }

    /**
     * @zh
     * 写入数据
     * 
     * @param buffer - 缓冲
     */
    public writeData(buffer:ArrayBuffer){
        this._buffers.push(buffer);
        this._size += buffer.byteLength;
    }

    /**
     * @zh
     * 写入UTF16LE字符串
     * 
     * @param str - 字符串
     */
    public writeString(str:string){
		let buff = js.str2ab(str);
        this.writeUShort(buff.byteLength);
        this.writeData(buff);
    }

    /**
     * @zh
     * 清空缓冲
     */
    public clear(){
        this._buffers = [];
        this._size = 0;
    }

    /**
     * @zh
     * 获得数据
     * 
     * @returns 最终的Buffer数据
     */
    public getData(){
		return js.mergeABs(...this._buffers);
    }
}

/**
 * @zh
 * 流缓冲读取类<br/>
 * 在[[BufferReader]]基础上添加了追加缓冲功能
 */
export class StreamReader extends BufferReader {

    /**
     * @zh
     * 构造函数
     * 
     * @param basesize 基础大小
     */
    constructor(basesize:number){
        super(new ArrayBuffer(basesize), 0, 0);
    }

    /**
     * @zh
     * 清空缓冲区
     */
    public clear(){
        this._capacity = 0;
        this._index = 0;
    }

    /**
     * @zh
     * 追加缓冲
     * 
     * @param buffer - 缓冲对象
     */
    public append(buffer:ArrayBuffer){
        if(this.getEmptySize() > buffer.byteLength){
			js.copyAB(buffer, this._buffer, this._capacity);
            this._capacity += buffer.byteLength;
        }else{
            let needsize = this.getRemainSize() + buffer.byteLength;
            let newcapacity = (needsize > this._capacity ? needsize : this._capacity) * 2;
			let newbuffer = new ArrayBuffer(newcapacity);
			js.copyAB(this._buffer.slice(this._index, this._capacity), newbuffer, 0);
			js.copyAB(buffer, newbuffer, this.getRemainSize());
            this._buffer = newbuffer;
            this._index = 0;
            this._capacity = needsize;
        }
    }
}

}

}    
