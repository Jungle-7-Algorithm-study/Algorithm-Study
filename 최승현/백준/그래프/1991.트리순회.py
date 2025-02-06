"""
http://boj.kr/1991
"""
from sys import stdin
from typing import Self
from collections import defaultdict

def input() -> str:
    return stdin.readline().strip()


class Node:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

    def set_left(self, left_node: Self):
        self.left = left_node

    def set_right(self, right_note: Self):
        self.right = right_node

    def get_left(self) -> Self:
        return self.left

    def get_right(self) -> Self:
        return self.right

    def get_value(self) -> str:
        return self.value

    def __str__(self) -> str:
        v = self.get_value()
        l = self.get_left()
        r = self.get_right()

        l = "." if l is None else l.get_value()
        r = "." if r is None else r.get_value()
        return f"({v}, {l}, {r})"


def main(root: Node) -> tuple[str, str, str]:
    """
    returns: 각각 전위순회, 중위순회, 후위순회 결과를 리턴
    """

    def preorder_traversal(cur: Node): 
        """전위순회: 방문, 왼쪽자식, 오른쪽자식"""
        if cur is None:
            return

        # print(cur)

        yield cur.get_value()
        yield from preorder_traversal(cur.get_left())
        yield from preorder_traversal(cur.get_right())

    def inorder_traversal(cur: Node): 
        """중위순회: 왼쪽자식, 방문, 오른쪽자식"""
        if cur is None:
            return

        yield from inorder_traversal(cur.get_left())
        yield cur.get_value()
        yield from inorder_traversal(cur.get_right())

    def postorder_traversal(cur: Node): 
        """후위순회: 왼쪽자식, 오른쪽자식, 방문"""
        if cur is None:
            return

        yield from postorder_traversal(cur.get_left())
        yield from postorder_traversal(cur.get_right())
        yield cur.get_value()


    return (
        "".join(preorder_traversal(root)),
        "".join(inorder_traversal(root)),
        "".join(postorder_traversal(root)),
    )


if __name__ == "__main__":
    n = int(input())
    graph: dict[str, Node] = {}

    for _ in range(n):
        val, left, right = input().split()
        node = graph.get(val)
        if not node:
            node = Node(val)
            graph[val] = node

        if left != ".":
            left_node = graph.get(left)
            if not left_node:
                left_node = Node(left)
                graph[left] = left_node
            node.set_left(left_node)

        if right != ".":
            right_node = graph.get(right)
            if not right_node:
                right_node = Node(right)
                graph[right] = right_node
            node.set_right(right_node)

    print("\n".join(main(graph["A"])))



