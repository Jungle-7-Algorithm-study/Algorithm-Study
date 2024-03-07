"""
https://leetcode.com/problems/dota2-senate/
"""

from collections import deque


class Solution:
    def predictPartyVictory(self, senate: str) -> str:
        """
        Radiant 팀과 Dire 팀이 있는데, 한 쪽만 남을 때까지 서로 죽인다. (?)
        매 라운드 마다 i = 0부터 한 칸씩 이동하며 철퇴를 날릴 수 있기 때문에
        가능한 살아있는 앞에 적군을 없애는 것이 이득이다. 죽은 senate들은 앞으로
        모든 라운드에서 영향력을 행사할 수 없다.
        """

        alive_radiants = deque()
        alive_dires = deque()

        for i, c in enumerate(senate):
            # initialize alive senates
            match c:
                case "R":
                    alive_radiants.append(i)
                case "D":
                    alive_dires.append(i)

        # senate의 생사확인 테이블
        alive = [True for _ in range(len(senate))]

        while alive_radiants and alive_dires:
            # Each Rounds
            for i, c in enumerate(senate):
                if not alive[i]:
                    continue

                opponent = alive_radiants
                if c == "R":
                    opponent = alive_dires

                slay = opponent.popleft()
                alive[slay] = False

                if not opponent:
                    break

        if alive_radiants:
            return "Radiant"
        return "Dire"


class Solution2:
    def predictPartyVictory(self, senate: str) -> str:
        """
        내 오른쪽에 있는 적을 먼저 처리하는 것이 이득이더라
        deque을 현재 인덱스보다 큰 놈이 나올 때까지 꺼내서 다시 queue에 집어넣으면 되겠다.
        """
        alive_radiants = deque()
        alive_dires = deque()
        alive = [True for _ in range(len(senate))]

        for i, c in enumerate(senate):
            # initialize alive senates
            if c == "R":
                alive_radiants.append(i)
            else:
                alive_dires.append(i)

        while alive_radiants and alive_dires:

            for i, c in enumerate(senate):
                if not alive[i]:
                    continue
                attackers = alive_radiants
                dependers = alive_dires
                if c == "D":
                    attackers, dependers = dependers, attackers

                if i != attackers[0]:
                    continue

                attacker = attackers.popleft()
                depender = dependers.popleft()
                alive[depender] = False

                attackers.append(attacker)

                if not dependers:
                    break

        if alive_radiants:
            return "Radiant"
        return "Dire"


if __name__ == "__main__":
    s = Solution2()

    print(s.predictPartyVictory("RD"))
    print(s.predictPartyVictory("RDD"))
    print(s.predictPartyVictory("RDRD"))
    print(s.predictPartyVictory("DDRRRDR"))
    print(s.predictPartyVictory("DRRDRDRDRDDRDRDR"))
