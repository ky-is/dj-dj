/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PagingObject } from './PagingObject';
import type { SimplifiedAlbumObject } from './SimplifiedAlbumObject';

export type PagingSimplifiedAlbumObject = (PagingObject & {
	items?: Array<SimplifiedAlbumObject>;
});

