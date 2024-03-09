"""
https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/
head노드가 주어졌을 때 floor(n // 2) 번째 노드를 제거한 뒤의 head 노드를 다시 리턴하는 문제
"""

from typing import Generator, Optional, Self


# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next: Self | None = None):
        self.val = val
        self.next: Self | None = next


class Solution:
    def deleteMiddle(self, head: Optional[ListNode]) -> Optional[ListNode]:
        """
        1. count whole number of list
        2. select middle node
        3. delete it
        """

        if not head:
            return None
        assert head is ListNode

        length = 0
        cur = head
        # 1.
        while cur:
            cur = cur.next
            length += 1

        if length == 1:
            return None

        # 2.
        cur = head
        for _ in range(length // 2 - 1):
            cur = cur.next

        # 3.
        victim = cur.next
        cur.next = cur.next.next

        del victim

        return head
