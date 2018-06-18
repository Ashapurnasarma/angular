/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import * as ts from 'typescript';
import { Decorator, ReflectionHost } from '../../../ngtsc/host';

export interface DecoratedClass {
  classNode: ts.Node;
  decorators: Decorator[];
}


/**
 * A reflection host that has extra methods for looking at non-Typescript package formats
 */
export interface NgccReflectionHost extends ReflectionHost {

  /**
   * Search the AST of the specified source file, looking for classes that have been decorated.
   * @param entryPoint The source file containing the exports to find.
   * @returns an array containing the decorated classes found in this file.
   */
  getDecoratedClasses(entryPoint: ts.SourceFile): DecoratedClass[];
}