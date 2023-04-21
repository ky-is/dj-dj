/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PagingObject } from './PagingObject';
import type { SimplifiedArtistObject } from './SimplifiedArtistObject';

export type PagingSimplifiedArtistObject = (PagingObject & {
	items?: Array<SimplifiedArtistObject>;
});

