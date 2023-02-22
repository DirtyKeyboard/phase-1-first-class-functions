function receivesAFunction(callback)
{
    return callback();
}

function returnsANamedFunction()
{
    const returnFunction = function() {}
    return returnFunction;
}

function returnsAnAnonymousFunction()
{
    return function(){};
}