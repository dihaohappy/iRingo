// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import * as flatbuffers from "../../../node_modules/flatbuffers/mjs/flatbuffers.js";

import { SourceType } from '../wk2/source-type.js';


export class Metadata {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):Metadata {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsMetadata(bb:flatbuffers.ByteBuffer, obj?:Metadata):Metadata {
  return (obj || new Metadata()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsMetadata(bb:flatbuffers.ByteBuffer, obj?:Metadata):Metadata {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new Metadata()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

attributionUrl():string|null
attributionUrl(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
attributionUrl(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

expireTime():number {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.readUint32(this.bb_pos + offset) : 0;
}

language():string|null
language(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
language(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

latitude():number {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? this.bb!.readFloat32(this.bb_pos + offset) : 0.0;
}

longitude():number {
  const offset = this.bb!.__offset(this.bb_pos, 12);
  return offset ? this.bb!.readFloat32(this.bb_pos + offset) : 0.0;
}

unknown5():number {
  const offset = this.bb!.__offset(this.bb_pos, 14);
  return offset ? this.bb!.readUint32(this.bb_pos + offset) : 0;
}

providerName():string|null
providerName(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
providerName(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 16);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

readTime():number {
  const offset = this.bb!.__offset(this.bb_pos, 18);
  return offset ? this.bb!.readUint32(this.bb_pos + offset) : 0;
}

reportedTime():number {
  const offset = this.bb!.__offset(this.bb_pos, 20);
  return offset ? this.bb!.readUint32(this.bb_pos + offset) : 0;
}

unknown9():number {
  const offset = this.bb!.__offset(this.bb_pos, 22);
  return offset ? this.bb!.readUint32(this.bb_pos + offset) : 0;
}

sourceType():SourceType {
  const offset = this.bb!.__offset(this.bb_pos, 24);
  return offset ? this.bb!.readUint8(this.bb_pos + offset) : SourceType.APPLE_INTERNAL;
}

unknown11():number {
  const offset = this.bb!.__offset(this.bb_pos, 26);
  return offset ? this.bb!.readUint32(this.bb_pos + offset) : 0;
}

unknown12():number {
  const offset = this.bb!.__offset(this.bb_pos, 28);
  return offset ? this.bb!.readUint32(this.bb_pos + offset) : 0;
}

unknown13():number {
  const offset = this.bb!.__offset(this.bb_pos, 30);
  return offset ? this.bb!.readUint32(this.bb_pos + offset) : 0;
}

unknown14():number {
  const offset = this.bb!.__offset(this.bb_pos, 32);
  return offset ? this.bb!.readUint32(this.bb_pos + offset) : 0;
}

unknown15():number {
  const offset = this.bb!.__offset(this.bb_pos, 34);
  return offset ? this.bb!.readUint32(this.bb_pos + offset) : 0;
}

static startMetadata(builder:flatbuffers.Builder) {
  builder.startObject(16);
}

static addAttributionUrl(builder:flatbuffers.Builder, attributionUrlOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, attributionUrlOffset, 0);
}

static addExpireTime(builder:flatbuffers.Builder, expireTime:number) {
  builder.addFieldInt32(1, expireTime, 0);
}

static addLanguage(builder:flatbuffers.Builder, languageOffset:flatbuffers.Offset) {
  builder.addFieldOffset(2, languageOffset, 0);
}

static addLatitude(builder:flatbuffers.Builder, latitude:number) {
  builder.addFieldFloat32(3, latitude, 0.0);
}

static addLongitude(builder:flatbuffers.Builder, longitude:number) {
  builder.addFieldFloat32(4, longitude, 0.0);
}

static addUnknown5(builder:flatbuffers.Builder, unknown5:number) {
  builder.addFieldInt32(5, unknown5, 0);
}

static addProviderName(builder:flatbuffers.Builder, providerNameOffset:flatbuffers.Offset) {
  builder.addFieldOffset(6, providerNameOffset, 0);
}

static addReadTime(builder:flatbuffers.Builder, readTime:number) {
  builder.addFieldInt32(7, readTime, 0);
}

static addReportedTime(builder:flatbuffers.Builder, reportedTime:number) {
  builder.addFieldInt32(8, reportedTime, 0);
}

static addUnknown9(builder:flatbuffers.Builder, unknown9:number) {
  builder.addFieldInt32(9, unknown9, 0);
}

static addSourceType(builder:flatbuffers.Builder, sourceType:SourceType) {
  builder.addFieldInt8(10, sourceType, SourceType.APPLE_INTERNAL);
}

static addUnknown11(builder:flatbuffers.Builder, unknown11:number) {
  builder.addFieldInt32(11, unknown11, 0);
}

static addUnknown12(builder:flatbuffers.Builder, unknown12:number) {
  builder.addFieldInt32(12, unknown12, 0);
}

static addUnknown13(builder:flatbuffers.Builder, unknown13:number) {
  builder.addFieldInt32(13, unknown13, 0);
}

static addUnknown14(builder:flatbuffers.Builder, unknown14:number) {
  builder.addFieldInt32(14, unknown14, 0);
}

static addUnknown15(builder:flatbuffers.Builder, unknown15:number) {
  builder.addFieldInt32(15, unknown15, 0);
}

static endMetadata(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createMetadata(builder:flatbuffers.Builder, attributionUrlOffset:flatbuffers.Offset, expireTime:number, languageOffset:flatbuffers.Offset, latitude:number, longitude:number, unknown5:number, providerNameOffset:flatbuffers.Offset, readTime:number, reportedTime:number, unknown9:number, sourceType:SourceType, unknown11:number, unknown12:number, unknown13:number, unknown14:number, unknown15:number):flatbuffers.Offset {
  Metadata.startMetadata(builder);
  Metadata.addAttributionUrl(builder, attributionUrlOffset);
  Metadata.addExpireTime(builder, expireTime);
  Metadata.addLanguage(builder, languageOffset);
  Metadata.addLatitude(builder, latitude);
  Metadata.addLongitude(builder, longitude);
  Metadata.addUnknown5(builder, unknown5);
  Metadata.addProviderName(builder, providerNameOffset);
  Metadata.addReadTime(builder, readTime);
  Metadata.addReportedTime(builder, reportedTime);
  Metadata.addUnknown9(builder, unknown9);
  Metadata.addSourceType(builder, sourceType);
  Metadata.addUnknown11(builder, unknown11);
  Metadata.addUnknown12(builder, unknown12);
  Metadata.addUnknown13(builder, unknown13);
  Metadata.addUnknown14(builder, unknown14);
  Metadata.addUnknown15(builder, unknown15);
  return Metadata.endMetadata(builder);
}
}
