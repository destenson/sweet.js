"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function mixin_1457(target_1458, source_1459) {
  class F extends target_1458 {}
  Object.getOwnPropertyNames(source_1459.prototype).forEach(name_1460 => {
    if (name_1460 !== "constructor") {
      let newProp = Object.getOwnPropertyDescriptor(source_1459.prototype, name_1460);
      Object.defineProperty(F.prototype, name_1460, newProp);
    }
  });
  return F;
}
exports.mixin = mixin_1457;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3N3ZWV0L3V0aWxzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsU0FBUyxVQUFULENBQW9CLFdBQXBCLEVBQWlDLFdBQWpDLEVBQThDO0FBQzVDLFFBQU0sQ0FBTixTQUFnQixXQUFoQixDQUE0QjtBQUM1QixTQUFPLG1CQUFQLENBQTJCLFlBQVksU0FBdkMsRUFBa0QsT0FBbEQsQ0FBMEQsYUFBYTtBQUNyRSxRQUFJLGNBQWMsYUFBbEIsRUFBaUM7QUFDL0IsVUFBSSxVQUFVLE9BQU8sd0JBQVAsQ0FBZ0MsWUFBWSxTQUE1QyxFQUF1RCxTQUF2RCxDQUFkO0FBQ0EsYUFBTyxjQUFQLENBQXNCLEVBQUUsU0FBeEIsRUFBbUMsU0FBbkMsRUFBOEMsT0FBOUM7QUFDRDtBQUNGLEdBTEQ7QUFNQSxTQUFPLENBQVA7QUFDRDtRQUNxQixLLEdBQWQsVSIsImZpbGUiOiJ1dGlscy5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIG1peGluXzE0NTcodGFyZ2V0XzE0NTgsIHNvdXJjZV8xNDU5KSB7XG4gIGNsYXNzIEYgZXh0ZW5kcyB0YXJnZXRfMTQ1OCB7fVxuICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhzb3VyY2VfMTQ1OS5wcm90b3R5cGUpLmZvckVhY2gobmFtZV8xNDYwID0+IHtcbiAgICBpZiAobmFtZV8xNDYwICE9PSBcImNvbnN0cnVjdG9yXCIpIHtcbiAgICAgIGxldCBuZXdQcm9wID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2VfMTQ1OS5wcm90b3R5cGUsIG5hbWVfMTQ2MCk7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRi5wcm90b3R5cGUsIG5hbWVfMTQ2MCwgbmV3UHJvcCk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIEY7XG59XG5leHBvcnQge21peGluXzE0NTcgYXMgbWl4aW59Il19