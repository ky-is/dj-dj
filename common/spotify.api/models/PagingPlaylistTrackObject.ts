/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PagingObject } from './PagingObject';
import type { PlaylistTrackObject } from './PlaylistTrackObject';

export type PagingPlaylistTrackObject = (PagingObject & {
	items?: Array<PlaylistTrackObject>;
});

