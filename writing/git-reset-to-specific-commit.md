# Git reset to specific commit

Reset the index and working tree to the desired tree

1. Ensure there are uncommitted changes that to keep

1. view the commits that are currently in the branch
    > git log --oneline

1. pick out the `hash` of the change to revert to
    > git reset --hard `hash`

1. Move the branch pointer back to the previous HEAD
    > git reset --soft HEAD@{1}

1. check that the right changes were reverted
    > git status

1. commit the change
    > git commit -m "revert to `hash`"

1. push the branch

1. merge the branch
