import { createAction } from '@reduxjs/toolkit';

export const contactAdd = createAction('items/add');

export const contactLoading = createAction('items/loading');

export const contactDelete = createAction('items/delete');

export const changeFilter = createAction('filter/change');
