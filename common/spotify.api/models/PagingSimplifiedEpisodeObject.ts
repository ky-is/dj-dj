/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PagingObject } from './PagingObject';
import type { SimplifiedEpisodeObject } from './SimplifiedEpisodeObject';

export type PagingSimplifiedEpisodeObject = (PagingObject & {
	items?: Array<SimplifiedEpisodeObject>;
});

