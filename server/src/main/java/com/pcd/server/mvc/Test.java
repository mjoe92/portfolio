package com.pcd.server.mvc;

import java.util.*;

public class Test{

    public static void main(String[] args) {
        int x = 0;
        for (int i = 0; i < 10000000; i++) {
            x++;
        }
        System.out.println(x);
    }

    public static String rollingString(String s, List<String> operations) {
        // Write your code here
        String result = "";
        char[] abc = s.toLowerCase().toCharArray();
        for (String op : operations) {
            int min = op.toCharArray()[0];
            int max = op.toCharArray()[1];
            char ch = op.toLowerCase().toCharArray()[2];
            for (int i = min; i <= max; i++) {
                if (abc[i] != ' ') {
                    int firstAbcPos = abc[i] - 'a';
                    int offset;
                    if (ch == 'L') {
                        offset = -1;
                    } else {
                        offset = 1;
                    }
                    int newAbcPos = (firstAbcPos + offset) % 26;
                    char newCh = (char) ('a' + newAbcPos);
                    result += newCh;
                } else {
                    result += abc[i];
                }
            }
        }
        return result;
    }
}

