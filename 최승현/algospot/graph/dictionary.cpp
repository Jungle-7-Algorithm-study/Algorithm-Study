#include <algorithm>
#include <iostream>
#include <vector>

using namespace std;

vector<vector<int>> adj;
vector<int> seen, order;

/**
 * 알파벳 각 글자에 대한 인접행렬. 간선 (i, j)는 알파벳 i가 j보다 앞에 와야 함을
 * 나타낸다.
 */
void makeGraph(const vector<string> &words) {
    // 호출을 여러번 할 수 있기 때문에 매번 초기화
    adj = vector<vector<int>>(26, vector<int>(26, 0));

    for (int j = 1; j < words.size(); ++j) {
        int i = j - 1;
        int len = min(words[i].size(), words[j].size());

        // word[i]가 word[j] 앞에 오는 이유를 추론
        for (int k = 0; k < len; ++k) {
            if (words[i][k] != words[j][k]) {
                int a = words[i][k] - 'a';
                int b = words[j][k] - 'a';

                // cout << "(" << words[i][k] << "," << words[j][k] << ")\n";

                adj[a][b] = 1;
                break;
            }
        }
    }
}

/**
 * 깊이우선 탐색을 수행하며 dfs가 종료하는 순서를 order 전역변수에 기억했다가
 * 위상정렬에 활용한다.
 */
void dfs(int cur) {
    seen[cur] = 1;
    for (int alpha = 0; alpha < adj.size(); ++alpha) {
        if (adj[cur][alpha] && !seen[alpha]) {
            // cur -> alpha 경로를 탐색한다
            dfs(alpha);
        }
    }
    // cur 뒤에 와야 할 모든 원소가 order에 등록이 되었다.
    order.push_back(cur);
}

/**
 * adj에 주어진 그래프를 위상정렬한 결과를 반환한다. 만약 DAG가 아닌경우 빈
 * 배열을 반환하라.
 *
 * @return vector<int> 위상정렬 결과 OR []
 */
vector<int> topologicalSort() {
    int n = adj.size();
    seen = vector<int>(n, 0);
    order.clear();

    for (int i = 0; i < n; ++i) {
        if (!seen[i]) {
            dfs(i); // a-z에 대하여 전부 order를 만들어준다.
        }
    }
    reverse(order.begin(), order.end());

    // DAG 검사
    for (int i = 0; i < n; ++i) {
        for (int j = i + 1; j < n; ++j) {
            if (adj[order[j]][order[i]]) {
                // 사이클 발견!
                return vector<int>();
            }
        }
    }

    return order;
}

int main(void) {
    const string alphabet = "abcdefghijklmnopqrstuvwxyz"; // 알파벳 문자열
    int c;
    cin >> c;
    for (int i = 0; i < c; ++i) {
        int n;
        cin >> n;

        vector<string> inputs(n);
        cin.ignore(); // 개행문자 제거

        for (int j = 0; j < n; ++j) {
            cin >> inputs[j];
        }

        makeGraph(inputs);

        vector<int> result = topologicalSort();

        if (result.size() == 0) {
            cout << "INVALID HYPOTHESIS\n";
            continue;
        }

        string resultString;
        for (int index : result) {
            resultString += alphabet[index];
        }

        cout << resultString << endl;
    }
}