/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PagingObject } from './PagingObject';
import type { SavedAlbumObject } from './SavedAlbumObject';

export type PagingSavedAlbumObject = (PagingObject & {
	items?: Array<SavedAlbumObject>;
});

