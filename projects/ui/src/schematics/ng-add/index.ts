import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { NodePackageInstallTask, RunSchematicTask } from '@angular-devkit/schematics/tasks';
import { addPackageToPackageJson } from './package';
import { Schema } from './schema';

// Just return the tree
export function ngAdd(options: Schema): Rule {
  return (tree: Tree, context: SchematicContext) => {
    const angularDependencyVersion = '^14.0.0';

    addPackageToPackageJson(tree, '@angular/cdk', angularDependencyVersion);
    addPackageToPackageJson(tree, '@angular/forms', angularDependencyVersion);
    addPackageToPackageJson(tree, '@angular/animations', angularDependencyVersion);

    if (options.fontAwesome) {
      addPackageToPackageJson(tree, '@fortawesome/fontawesome-free', '^6.0.0');
    }

    if (options.charts) {
      addPackageToPackageJson(tree, 'chart.js', '^3.1.1');
    }

    const installMainDependenciesTask = context.addTask(new NodePackageInstallTask());

    context.addTask(new RunSchematicTask('ng-add-vat-setup', options), [installMainDependenciesTask]);
  };
}
