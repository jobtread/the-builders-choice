import { register } from 'node:module';
import { pathToFileURL } from 'node:url';

register(pathToFileURL('/code/src/loader.js'));
