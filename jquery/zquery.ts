interface zQuery {}

declare const Z: zQuery;
Z("p").removeClass("myClass noClass").addClass("yourClass");

Z(["p", "t"]).text("hello");

const tag2 = Z("ul li").addClass(function(index) {
  return "item-" + index;
});

Z(tag2).html(function() {
  console.log(this);
  return Z(this).data('name') + '입니다';
});
