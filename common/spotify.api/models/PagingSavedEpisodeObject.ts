/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PagingObject } from './PagingObject';
import type { SavedEpisodeObject } from './SavedEpisodeObject';

export type PagingSavedEpisodeObject = (PagingObject & {
	items?: Array<SavedEpisodeObject>;
});

