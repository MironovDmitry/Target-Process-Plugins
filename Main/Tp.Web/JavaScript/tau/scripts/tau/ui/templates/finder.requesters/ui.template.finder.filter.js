define(["tau/core/templates-factory"],function(e){var o={name:"finder-requesters-filter",markup:['<div class="ui-form">','<div class="ui-form__group">','<div class="ui-form__cols">','<label for="name">Last Name</label>','<input type="text" name="name" />',"</div>",'<div class="ui-form__cols">','<label for="email">Email</label>','<input data-autofocus type="text" name="email" />',"</div>","</div>",'<div class="ui-form__group">','<div class="ui-form__cols">','<label for="type">User Type</label>','<select name="type">','<option value="">All</option>','<option value="Requester">Requesters</option>','<option value="User">Users</option>',"</select>","</div>",'<div class="ui-form__cols">','<label for="type">Company</label>','<select name="companyId">','<option value="">All</option>',"{{each(i, company) filter.companies}}",'<option value="${company.id}">${company.name}</option>',"{{/each}}","</select>","</div>","</div>",'<div class="ui-form__group">','<div class="ui-form__row ui-form__row-controls button-group">','<button type="button" name="action" value="search" class="button" >Filter</button>','<button type="button" name="action" value="reset" class="button" >Clear</button>',"</div>","</div>","</div>"],dependencies:[]};return e.register(o)});