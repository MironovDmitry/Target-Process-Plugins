define(["tau/core/templates-factory","tau/ui/templates/entityList/ui.template.entityList.row"],function(a){var b={name:"entityList",options:{contentSelector:".ui-entityList-generalTable"},markup:['<div class="ui-entityList">','    <table cellspacing="0" cellpadding="4" class="ui-table ui-entityList-generalTable"{{if items.length === 0}} style="display:none"{{/if}}>',"        <thead>",'            <tr class="ui-entityList-headRow">','                <th style="width: 1%;">&nbsp;</th>','                <th style="width: 1%;">ID</th>',"                <th>Name</th>","                <th>State</th>","                <th>Effort</th>","                <th>Assignments</th>","            </tr>","        </thead>","        <tbody>",'            {{tmpl(items) "entityList-row"}}',"        </tbody>","    </table>","</div>"],dependencies:["entityList-row"]};return a.register(b)})