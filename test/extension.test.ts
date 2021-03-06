
import * as assert from 'assert';
import * as vscode from 'vscode';
import * as myExtension from '../src/extension';
import {Whitespacer} from '../src/whitespacer';

suite('Extension Tests', () => {
	test('Whitespacer: Convert tabs to spaces', () => {
		let whitespacer = new Whitespacer();

        var inputText = '\ta\n\t\nb\t\nc\t\td';
        var tabSize = 2;
        var newText = whitespacer.convertTabsToSpaces(tabSize, inputText);
        assert.equal(newText, '  a\n  \nb  \nc    d');

        tabSize = 3;
        newText = whitespacer.convertTabsToSpaces(tabSize, inputText);
        assert.equal(newText, '   a\n   \nb   \nc      d');
	});

    test('Whitespacer: Convert spaces to tabs', () => {
		let whitespacer = new Whitespacer();

        let inputText = '  a\n  \nb  \nc    d';
        let tabSize = 2;
        let newText = whitespacer.convertSpacesToTabs(tabSize, inputText);

        assert.equal(newText, '\ta\n\t\nb\t\nc\t\td');
	});
});