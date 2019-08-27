import { configure } from '@storybook/react';
import { setConsoleOptions } from '@storybook/addon-console';
import requireContext from 'require-context.macro';

setConsoleOptions({
  panelExclude: []
});

function loadStories() {
  let req = requireContext("../src/components/stories", true, /.(tsx|js)$/);
  req.keys().forEach(filename => req(filename));

  req = requireContext("../src/components", true, /.stories.(tsx|js)$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);