let options = [
    '--require-module ts-node/register',
    '--require ./steps/*/*.ts',
    '--format progress',
    '--parallel 4',
    
].join(' ');

let run_features = [
    './features/',
    options
].join(' ');


module.exports = {
    test_runner: run_features
};


