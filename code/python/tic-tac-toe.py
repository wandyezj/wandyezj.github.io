# Example Tic Tac Toe game for two players

PLAYER_SYMBOL_ONE = 'X'
PLAYER_SYMBOL_TWO = 'O'
TOTAL_TURNS = 9
TURN_ORDER = [PLAYER_SYMBOL_ONE, PLAYER_SYMBOL_TWO]

def get_player_symbol(turn):
    """
    Returns the player symbol for the given turn.
    """
    return TURN_ORDER[turn % 2]

board = list(range(0, 10))

def print_board(board):
    print(f"""
{board[1]} | {board[2]} | {board[3]}
---------
{board[4]} | {board[5]} | {board[6]}
---------
{board[7]} | {board[8]} | {board[9]}
 """)

def player_won(board):
    """
    Returns the player symbol that won the game or None if no one has won yet.
    """
    # All possible winning combinations
    wins = [
        # horizontal
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        # vertical
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        # diagonal
        [1,5,9],
        [3,5,7]
    ]

    for win in wins:
        # check if all the symbols in the win list are the same
        a = board[win[0]]
        b = board[win[1]]
        c = board[win[2]]
        if a == b and b == c:
            return board[win[0]]

    return None




for turn in range(TOTAL_TURNS):
    # Print current board
    print_board(board)

    # Current player
    player_symbol = get_player_symbol(turn)
    print(f"Turn {turn + 1}, {player_symbol}'s turn")

    # get the player's move

    valid_moves = list(filter(lambda x: isinstance(x, int) and x != 0, board))
    move = None
    while move == None:
        player_move = input(f"Enter a number in {str(valid_moves)}:")
        if player_move.isdigit() and int(player_move) in valid_moves:
            move = int(player_move)
        else:
            print("Invalid move, please enter a valid move")


    # enter the move
    move = int(move)
    board[move] = player_symbol

    # evaluate win
    winner = player_won(board)
    if winner != None:
        print(f"{winner} won!")
        break