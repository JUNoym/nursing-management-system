import styles from './index.module.scss'
import React from 'react'

// material
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'

interface Props { }

const Header = (props: Props) => {

    return (
        <div className={styles.content}>
            <AppBar position="fixed" classes={{ root: styles.RootBar }}>
                <Container className={styles.container}>
                    <Toolbar >
                        <h1>夜勤日誌アプリ</h1>
                        <div className={styles.link}>
                            <Button>
                                排泄
                                </Button>
                            <Button>
                                日誌
                                </Button>
                            <Button>
                                バイタル
                                </Button>
                        </div>
                        <div className={styles.signupWrapper}>
                            <Button>
                                Login
                            </Button>
                            <Button variant="outlined" classes={{ root: styles.Mroot }} >
                                Signup
                            </Button>
                        </div>
                    </Toolbar>
                </Container>
            </AppBar>
        </div >
    )
}

export default Header
