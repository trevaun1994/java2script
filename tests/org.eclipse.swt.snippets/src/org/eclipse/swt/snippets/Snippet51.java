/*******************************************************************************
 * Copyright (c) 2000, 2004 IBM Corporation and others.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 *
 * Contributors:
 *     IBM Corporation - initial API and implementation
 *******************************************************************************/
package org.eclipse.swt.snippets;

/*
 * Table example snippet: scroll a table (set the top index)
 *
 * For a list of all SWT example snippets see
 * http://www.eclipse.org/swt/snippets/
 */
import org.eclipse.swt.*;
import org.eclipse.swt.widgets.*;

public class Snippet51 {

public static void main (String [] args) {
	Display display = new Display ();
	Shell shell = new Shell (display);
	Table table = new Table (shell, SWT.BORDER | SWT.MULTI);
	table.setSize (200, 200);
	for (int i=0; i<128; i++) {
		TableItem item = new TableItem (table, SWT.NONE);
		item.setText ("Item " + i);
	}
	table.setTopIndex (95);
	shell.pack ();
	shell.open ();
	while (!shell.isDisposed ()) {
		if (!display.readAndDispatch ()) display.sleep ();
	}
	display.dispose ();
}
} 
