define(["jQuery","tau/components/component.creator","tau/ui/extensions/board.main.menu/ui.extension.board.main.menu.item.social-share"],function(a,e,t){return{create:function(a){var s={name:"board.main.menu.item.promo-social-share",engine:"jqote2",markup:['<div class="tau-menu-item tau-social-share">','   <span class="tau-menu-icon tau-icon-social-share"></span>','   <div class="tau-social-share-popup">',"       <span>Like new Targetprocess?</span>","       <br>","       <span>Spread the word!</span>",'       <ul class="tau-share-links">','           <li class="tau-share-link">','               <a class="tau-btn tau-facebook" href="//www.facebook.com/TargetProcess" title="Like Targetprocess on Facebook" target="_blank">Facebook</a>','           <li class="tau-share-link">','               <a class="tau-btn tau-google-plus" href="//plus.google.com/106458767326839109835/posts" title="Follow Targetprocess on Google+" target="_blank">Google+</a>','           <li class="tau-share-link">','               <a class="tau-btn tau-twitter" href="https://twitter.com/intent/tweet?url=http%3A%2F%2Ftargetprocess.com%2F3&text=Try%20TargetProcess3%20%E2%80%94%20fascinating%20agile%20project%20management%20software&hashtags=targetprocess,kanban,scrum&related=Targetprocess" title="Share on Twitter" target="_blank">Twitter</a>',"       </ul>","   </div>","</div>"]},o={extensions:[t],template:s},r=e.create(o,a);return r.fire("dataBind",{}),r}}});