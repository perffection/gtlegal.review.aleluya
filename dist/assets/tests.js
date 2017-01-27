'use strict';

define('gtlegal-review-aleluya/tests/app.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('gtlegal-review-aleluya/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('gtlegal-review-aleluya/tests/helpers/destroy-app.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('gtlegal-review-aleluya/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember', 'gtlegal-review-aleluya/tests/helpers/start-app', 'gtlegal-review-aleluya/tests/helpers/destroy-app'], function (exports, _qunit, _ember, _gtlegalReviewAleluyaTestsHelpersStartApp, _gtlegalReviewAleluyaTestsHelpersDestroyApp) {
  var Promise = _ember['default'].RSVP.Promise;

  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _gtlegalReviewAleluyaTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Promise.resolve(afterEach).then(function () {
          return (0, _gtlegalReviewAleluyaTestsHelpersDestroyApp['default'])(_this.application);
        });
      }
    });
  };
});
define('gtlegal-review-aleluya/tests/helpers/module-for-acceptance.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('gtlegal-review-aleluya/tests/helpers/resolver', ['exports', 'gtlegal-review-aleluya/resolver', 'gtlegal-review-aleluya/config/environment'], function (exports, _gtlegalReviewAleluyaResolver, _gtlegalReviewAleluyaConfigEnvironment) {

  var resolver = _gtlegalReviewAleluyaResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _gtlegalReviewAleluyaConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _gtlegalReviewAleluyaConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('gtlegal-review-aleluya/tests/helpers/resolver.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('gtlegal-review-aleluya/tests/helpers/start-app', ['exports', 'ember', 'gtlegal-review-aleluya/app', 'gtlegal-review-aleluya/config/environment'], function (exports, _ember, _gtlegalReviewAleluyaApp, _gtlegalReviewAleluyaConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    // use defaults, but you can override
    var attributes = _ember['default'].assign({}, _gtlegalReviewAleluyaConfigEnvironment['default'].APP, attrs);

    _ember['default'].run(function () {
      application = _gtlegalReviewAleluyaApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('gtlegal-review-aleluya/tests/helpers/start-app.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('gtlegal-review-aleluya/tests/resolver.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass jshint.');
  });
});
define('gtlegal-review-aleluya/tests/router.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('gtlegal-review-aleluya/tests/routes/index-aleluya.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/index-aleluya.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index-aleluya.js should pass jshint.');
  });
});
define('gtlegal-review-aleluya/tests/routes/index.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/index.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass jshint.');
  });
});
define('gtlegal-review-aleluya/tests/routes/medios-aleluya.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/medios-aleluya.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/medios-aleluya.js should pass jshint.');
  });
});
define('gtlegal-review-aleluya/tests/routes/planillas-aleluya.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/planillas-aleluya.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/planillas-aleluya.js should pass jshint.');
  });
});
define('gtlegal-review-aleluya/tests/routes/sobrenos-aleluya.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/sobrenos-aleluya.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/sobrenos-aleluya.js should pass jshint.');
  });
});
define('gtlegal-review-aleluya/tests/test-helper', ['exports', 'gtlegal-review-aleluya/tests/helpers/resolver', 'ember-qunit'], function (exports, _gtlegalReviewAleluyaTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_gtlegalReviewAleluyaTestsHelpersResolver['default']);
});
define('gtlegal-review-aleluya/tests/test-helper.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('gtlegal-review-aleluya/tests/unit/routes/index-aleluya-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:index-aleluya', 'Unit | Route | index aleluya', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('gtlegal-review-aleluya/tests/unit/routes/index-aleluya-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/index-aleluya-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/index-aleluya-test.js should pass jshint.');
  });
});
define('gtlegal-review-aleluya/tests/unit/routes/medios-aleluya-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:medios-aleluya', 'Unit | Route | medios aleluya', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('gtlegal-review-aleluya/tests/unit/routes/medios-aleluya-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/medios-aleluya-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/medios-aleluya-test.js should pass jshint.');
  });
});
define('gtlegal-review-aleluya/tests/unit/routes/planillas-aleluya-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:planillas-aleluya', 'Unit | Route | planillas aleluya', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('gtlegal-review-aleluya/tests/unit/routes/planillas-aleluya-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/planillas-aleluya-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/planillas-aleluya-test.js should pass jshint.');
  });
});
define('gtlegal-review-aleluya/tests/unit/routes/sobrenos-aleluya-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:sobrenos-aleluya', 'Unit | Route | sobrenos aleluya', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('gtlegal-review-aleluya/tests/unit/routes/sobrenos-aleluya-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/sobrenos-aleluya-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/sobrenos-aleluya-test.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('gtlegal-review-aleluya/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map
