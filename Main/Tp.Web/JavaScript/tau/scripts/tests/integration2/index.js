(function(){require.config({baseUrl:"../../",paths:{StoreSpec:"tests/integration2/StoreSpec",specs:"tests/integration2/specs"}}),require.onError=function(a){console.log("File wasn't loaded:"+a.message)},require(["Underscore","jQuery","libs.tests/qunit","libs.tests/extension.qunit"],function(_){require(["specs/spec.project"],function(){var a=_.toArray(arguments);_.forEach(a,function(a){a.run()})})})})()