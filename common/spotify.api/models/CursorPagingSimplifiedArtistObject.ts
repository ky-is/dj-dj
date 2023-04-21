/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ArtistObject } from './ArtistObject';
import type { CursorPagingObject } from './CursorPagingObject';

export type CursorPagingSimplifiedArtistObject = (CursorPagingObject & {
	items?: Array<ArtistObject>;
});

