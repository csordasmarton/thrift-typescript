export interface IMyStruct {
    field1: Array<Array<string>>;
}
export class MyStruct {
    public field1: Array<Array<string>> = null;
    constructor(args?: IMyStruct) {
        if (args && (args.field1 !== null && args.field1 !== undefined)) {
            this.field1 = Array.from(args.field1);
        }
        else {
            throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, "Required field field1 is unset!");
        }
    }
    public write(output: TProtocol): void {
        output.writeStructBegin("MyStruct");
        if (this && (this.field1 !== null && this.field1 !== undefined)) {
            output.writeFieldBegin("field1", Thrift.Type.LIST, 1);
            output.writeListBegin(Thrift.Type.LIST, this.field1.length);
            this.field1.forEach((value_1: Array<string>): void => {
                output.writeListBegin(Thrift.Type.STRING, value_1.length);
                value_1.forEach((value_2: string): void => {
                    output.writeString(value_2);
                });
                output.writeListEnd();
            });
            output.writeListEnd();
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
    }
    public read(input: TProtocol): void {
        input.readStructBegin();
        while (true) {
            const ret: {
                fname: string;
                ftype: Thrift.Type;
                fid: number;
            } = input.readFieldBegin();
            const fname: string = ret.fname;
            const ftype: Thrift.Type = ret.ftype;
            const fid: number = ret.fid;
            if (ftype === Thrift.Type.STOP) {
                break;
            }
            switch (fid) {
                case 1:
                    if (ftype === Thrift.Type.LIST) {
                        this.field1 = new Array<Array<string>>();
                        const metadata_1: {
                            etype: Thrift.Type;
                            size: number;
                        } = input.readListBegin();
                        const size_1: number = metadata_1.size;
                        for (let i_1: number = 0; i_1 < size_1; i_1++) {
                            const value_3: Array<string> = new Array<string>();
                            const metadata_2: {
                                etype: Thrift.Type;
                                size: number;
                            } = input.readListBegin();
                            const size_2: number = metadata_2.size;
                            for (let i_2: number = 0; i_2 < size_2; i_2++) {
                                const value_4: string = input.readString();
                                value_3.push(value_4);
                            }
                            input.readListEnd();
                            this.field1.push(value_3);
                        }
                        input.readListEnd();
                    }
                    else {
                        input.skip(ftype);
                    }
                    break;
                default: {
                    input.skip(ftype);
                }
            }
            input.readFieldEnd();
        }
        input.readStructEnd();
    }
};