package edu.northwestern.physics.groups.atomic.applet;

import java.awt.Graphics;
import java.awt.Point;

class Caption implements InsertText {
	private final int x[] = { 13, 31, 32, 33, 30, 34, 30, 34, 6, 7, 8, 9, 13,
			17, 19, 20, 21, 29, 35, 5, 9, 12, 13, 16, 17, 18, 22, 29, 35, 43,
			44, 45, 46, 47, 48, 49, 50, 5, 13, 17, 22, 29, 30, 31, 32, 33, 34,
			35, 6, 7, 13, 17, 22, 29, 35, 8, 13, 17, 22, 29, 35, 39, 43, 44,
			45, 46, 47, 48, 49, 50, 9, 13, 17, 22, 29, 35, 38, 39, 5, 9, 13,
			17, 22, 30, 34, 39, 5, 6, 7, 8, 12, 13, 14, 16, 17, 18, 21, 22, 23,
			30, 34, 39, 31, 32, 33, 39, 39, 14, 38, 39, 40, 31, 32, 33, 7, 8,
			9, 10, 14, 18, 20, 21, 22, 30, 34, 6, 10, 13, 14, 17, 18, 19, 23,
			30, 34, 43, 44, 45, 46, 47, 48, 49, 50, 6, 14, 18, 23, 29, 35, 7,
			8, 14, 18, 23, 29, 35, 9, 14, 18, 23, 29, 30, 31, 32, 33, 34, 35,
			43, 44, 45, 46, 47, 48, 49, 50, 10, 14, 18, 23, 29, 35, 6, 10, 14,
			18, 23, 29, 35, 6, 7, 8, 9, 13, 14, 15, 17, 18, 19, 22, 23, 24, 29,
			35, 37, 38, 30, 34, 36, 39, 30, 34, 39, 31, 32, 33, 38, 37, 36, 36,
			37, 38, 39, 39 };

	private final int y[] = { 3, 4, 4, 4, 5, 5, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7,
			7, 7, 7, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 9,
			9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10, 10, 11, 11,
			11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 12, 12, 12, 12,
			12, 12, 12, 12, 13, 13, 13, 13, 13, 13, 13, 13, 14, 14, 14, 14, 14,
			14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 15, 15, 15, 15, 16, 17,
			17, 17, 17, 20, 20, 20, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21,
			22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22,
			22, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 25, 25, 25,
			25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 26,
			26, 26, 26, 26, 26, 27, 27, 27, 27, 27, 27, 27, 28, 28, 28, 28, 28,
			28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 29, 29, 29, 29, 30,
			30, 30, 31, 31, 31, 31, 32, 33, 34, 34, 34, 34, 34 };

	public Point elementAt(int i) {
		return new Point(x[i], y[i]);
	}

	public void plot(Graphics g, int xx, int yy) {
		for (int i = 0; i < x.length; i++) {
			g.drawLine(xx + x[i], yy + y[i], xx + x[i], yy + y[i]);
		}
	}

	public int size() {
		return x.length;
	}
}