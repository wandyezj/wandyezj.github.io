// sudo apt install clang

#include <assert.h>     /* assert */

#include <iostream>
#include <chrono>
#include <random>
#include <vector>
#include <algorithm>

// Node for a singly linked list
struct Node {
    // nullptr if last node in the list
    Node* next;

    // could be a template T
    int data;
};


/*
headA and headB are sorted singly linked lists, sorted in ascending order, ending with a next value of nullptr.

combine merges the two lists destroying the next sequence of a and b and returns the start of the list.

assumes: NO cycles between nodes

*/
Node* combine(Node* headA, Node* headB) {

    // headA or headB could be nullptr, simply return the head of the other list.
    if (headA == nullptr) {
        return headB;
    }

    if (headB == nullptr) {
        return headA;
    }

    // assert: no cycles within headA, headB, or between headA and headB

    Node* nextA = headA;
    Node* nextB = headB;

    // starting node
    Node* head = nullptr;

    // current node
    Node* next = nullptr;

    // go through a and b and join them together with next
    while (nextA != nullptr && nextB != nullptr) {

        // should we next be a or b? depends...
        int a = nextA->data;
        int b = nextB->data;

        Node* pick;

        // determine next and move selected head forward
        if (a < b) {
            pick = nextA;
            nextA = nextA->next;
        } else {
            pick = nextB;
            nextB = nextB->next;
        }

        // Make pick next node in the list
        if (head == nullptr) {
            // first node in the list
            head = pick;
            next = pick;
        } else {
            // chain to last node
            next->next = pick;
            next = pick;
        }
    }

    // note: at the end of the while loop either nextA or nextB is nullptr.
    assert(nextA == nullptr || nextB == nullptr);

    // optimize: can skip second check and use else, since other will be null

    // append remaining elements in a
    if (nextA != nullptr) {
        next->next = nextA;
    }

    // append remaining elements in b
    if (nextB != nullptr) {
        next->next = nextB;
    }

    return head;
}

// note: C++ singly linked list is forward_list

void print(Node* head) {
    auto next = head;
    while (next != nullptr) {
        std::cout << next->data << std::endl;
        next = next->next;
    }
}

void print_list(Node nodes[], size_t size) {
    for (size_t i = 0; i < size; i++) {
        auto &node = nodes[i];
        auto data = node.next == nullptr ? -1 : node.next->data;
        std::cout << i <<" " << node.data << " " << data << std::endl;
    }
}

std::vector<int> get_random_vector_ascending(size_t size) {
    // https://cplusplus.com/reference/random/uniform_int_distribution/operator()/
    // construct a trivial random generator engine from a time-based seed:
    unsigned seed = std::chrono::system_clock::now().time_since_epoch().count();
    std::default_random_engine generator (seed);

    // only 0 through 9 for simple formatting
    std::uniform_int_distribution<int> distribution(0,9);

    auto get_random_value = [&generator, &distribution](){
        return distribution(generator);
    };

    std::vector<int> v(size);
    std::generate(v.begin(), v.end(), get_random_value);

    std::sort(v.begin(), v.end());

    return v;
}


int main(int argc, char* argv[]) {

    // run some tests

    // initialize two lists of nodes
    // make it a single big array with pointers to next nodes in the array
    // set last node next to nullptr.
    // cut array in half by setting middle node to nullptr
    // get pointers to two heads

    // need to sort
    const size_t size = 5;
    Node nodes[5] = {};

    for (size_t i = 0; i < size; i++) {
        auto &node = nodes[i];
        // make it easy to check initial data
        node.data = i;
        node.next = &(nodes[i+1]);
    }

    nodes[size -1].next = nullptr;

    // check list out
    print_list(nodes, size);


    std::cout << std::endl;

    // cut up list
    const auto index_head_a = 0;
    const auto index_head_b = size / 2;

    Node* head_a = &(nodes[index_head_a]);
    Node* head_b = &(nodes[index_head_b]);

    nodes[index_head_b -1].next = nullptr;

    print_list(nodes, size);

    // fill lists with random values

    std::cout << std::endl;
    print(head_a);
    std::cout << std::endl;
    print(head_b);

    std::cout << std::endl;

    // combine the lists
    auto result = combine(head_a, head_b);
    print(result);

    // check that combined list is sorted
    auto previous = result;
    auto current = result->next;
    auto count = 1;
    while (current != nullptr) {
        const auto previous_data = previous->data;
        const auto current_data = current->data;

        if (previous_data > current_data) {
            std::cout<<"ERROR: previous " << previous_data << "is greater than current " << current_data <<std::endl 
            << "nodes should be in ascending order after combine" <<std::endl;
        }

        count++;
        previous = current;
        current = current->next;
    }

    // note: if nodes next create a loop this will be an infinite loop

    if (count != size) {
         std::cout<<"ERROR: missing nodes, expected " << size << " counted " << count <<std::endl;
    }

    std::cout << "done" << std::endl;
}

