/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PagingObject } from './PagingObject';
import type { SavedTrackObject } from './SavedTrackObject';

export type PagingSavedTrackObject = (PagingObject & {
	items?: Array<SavedTrackObject>;
});

