#!/usr/bin/python3
"""Write a class Square that defines a square by size"""


class Square():
    """class rep a square"""

    def __init__(self, size=0):
        """Initialize class square
        Args:
            size (int): size of square
        """
        if (type(size) is not int):
            raise TypeError("size must be an integer")
        elif (size < 0):
            raise ValueError("size must be >= 0")
        self.__size = size
