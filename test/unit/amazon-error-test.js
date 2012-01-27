var AmazonError = require("../../lib/dynode/amazon-error"),
    should = require('should');

describe("Amazon Error Handling", function() {
  
  it("should parse amazon type string", function() {
    var err = new AmazonError({statusCode: 400, type: "com.amazonaws.dynamodb.v20111205#ResourceNotFoundException", 
                              message: "Requested resource not found"});
    
    err.type.should.equal("ResourceNotFoundException");                     
    err.message.should.equal("Requested resource not found");
    err.statusCode.should.equal(400);
  });

  it("should have custom to string", function(){
    var err = new AmazonError({statusCode: 400, type: "com.amazonaws.dynamodb.v20111205#InvalidParameterValueException", 
                              message: "One or more parameter values were invalid"});

    err.toString().should.equal("AmazonError - 400 InvalidParameterValueException: One or more parameter values were invalid");
  });

  it("should parse error message from amazons service token service", function() {
    var err = new AmazonError({statusCode: 400, type: 'InvalidClientTokenId', message: 'The security token included in the request is invalid' });

    err.type.should.equal("InvalidClientTokenId");                
    err.message.should.equal("The security token included in the request is invalid");
    err.statusCode.should.equal(400);
  });

});