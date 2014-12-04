function logWithRestParams(logger, ...values) { // groups parameter 0..length into values array
    logger.log(...values); //expands values array
}
logWithRestParams(console, 'hack', 'the', 'planet');

function logWithDefaultParam(values, logger = console) {
    logger.log(...values);
}

logWithDefaultParam(['hack', 'the', 'planet']);
