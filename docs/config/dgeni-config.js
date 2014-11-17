var path = require('canonical-path');

var Package = require('dgeni').Package;

module.exports = new Package('dgeni-demo', [
  require('dgeni-packages/ngdoc')
])

.factory(require('./deployments/debug'))
.factory(require('./deployments/default'))

.config(function(dgeni, log, readFilesProcessor, writeFilesProcessor) {

  dgeni.stopOnValidationError = true;
  dgeni.stopOnProcessingError = true;

  log.level = 'info';

  readFilesProcessor.basePath = path.resolve(__dirname, '../../');
  readFilesProcessor.sourceFiles = [
    {include: 'src/**/*.js', basePath: 'src'},
    {include: 'docs/content/**/*.ngdoc', basePath: 'docs/content'}
  ];

  writeFilesProcessor.outputFolder = 'build/docs';
})

.config(function(templateFinder, templateEngine) {

  templateEngine.config.tags = {
    variableStart: '{$',
    variableEnd: '$}'
  };

  templateFinder.templateFolders.unshift(path.resolve(__dirname, 'templates'));

  templateFinder.templatePatterns = [
    '${ doc.template }',
    '${ doc.id }.${ doc.docType }.template.html',
    '${ doc.id }.template.html',
    '${ doc.docType }.template.html',
    'common.template.html'
  ];
});
