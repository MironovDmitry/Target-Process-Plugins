define(["tau/core/templates-factory"],function(t){var e={name:"board.templates.editor",engine:"jqote2",markup:['<div class="tau-inline-group tau-board-save-template">',"<div>",'<button type="button" class="tau-btn tau-save-template i-role-formtrigger">Save as Template</button>',"</div>",'<div class="tau-save-template-form i-role-formholder">',"<form>",'<div class="tau-field"><input type="text" class="tau-in-text" placeholder="Name" name="name"></div>','<div class="tau-field"><textarea placeholder="Description" class="tau-in-text" name="description"></textarea></div>','<div class="tau-field"><input type="text" class="tau-in-text" placeholder="Tags, comma separated" name="tags"></div>','<div class="tau-field"><button class="tau-btn" type="submit">Save</button></div>',"</form>","</div>","</div>"]};return t.register(e)});