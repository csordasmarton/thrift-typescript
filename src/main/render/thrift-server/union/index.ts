import * as ts from 'typescript'

import {
    UnionDefinition,
} from '@creditkarma/thrift-parser'

import {
    IIdentifierMap,
} from '../../../types'

import {
    renderInterface,
} from '../struct/interface'

import {
    renderCodec,
} from './codec'

import {
    renderClass,
} from './class'

export function renderUnion(node: UnionDefinition, identifiers: IIdentifierMap): Array<ts.Statement> {
    return [
        ...renderInterface(node, identifiers),
        renderCodec(node, identifiers),
        renderClass(node, identifiers),
    ]
}
