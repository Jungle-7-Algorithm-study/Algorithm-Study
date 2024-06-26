"""
https://leetcode.com/problems/implement-trie-prefix-tree
"""


class Trie:
    class Node:
        def __init__(self, letter: str) -> None:
            self.c = letter
            self.e: dict[str, Trie.Node] = {}
            self.end = False

    def __init__(self) -> None:
        self.root = Trie.Node("")

    def insert(self, word: str) -> None:
        """
        1. prefix가 없을때까지 내려간다
        2. 한 글자씩 Node를 생성하고 그 child를 만든다
        3. 마지막 글자인 경우, end를 True로 설정한다
        """
        cur = self.root
        i = 0

        # 1.
        while i < len(word) and cur.e.get(word[i]):
            cur = cur.e[word[i]]
            i += 1

        # 2.
        for c in word[i:]:
            cur.e[c] = Trie.Node(c)
            cur = cur.e[c]

        # 3.
        cur.end = True

    def search(self, word: str) -> bool:
        cur = self.root
        i = 0

        while i < len(word) and cur.e.get(word[i]):
            cur = cur.e[word[i]]
            i += 1

        if i < len(word) or not cur.end:
            return False
        return True

    def startsWith(self, prefix: str) -> bool:
        cur = self.root
        i = 0

        while i < len(prefix) and cur.e.get(prefix[i]):
            cur = cur.e[prefix[i]]
            i += 1

        if i < len(prefix):
            return False
        return True


# Your Trie object will be instantiated and called as such:

word = "apple"
prefix = "app"
obj = Trie()
obj.insert(word)
assert obj.search(word)
assert obj.startsWith(prefix)
