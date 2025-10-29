/* global QUnit */
QUnit.config.autostart = false;

sap.ui.require(["project1cicd/test/integration/AllJourneys"
], function () {
	QUnit.start();
});
