const User = require('../model/user/user');

module.exports = {
    store_user: async (req, res, next) => {
        try {
            const user = new User(req.body)
            await user.save();
            const token = await user.generateAuthToken()
            res.status(201).send({ user, token })
        } catch (error) {
            res.status(400).send(error);
            console.log(error.message);
        }
    },
    user_login: async (req, res, next) => {

        try {
            const { email, password } = req.body;
            const user = await User.findByCredentials(User, email, password)
            if (!user) {
                return res.status(401).send({ error: 'Login failed! Check authentication credentials' })
            }
            const token = await user.generateAuthToken()
            res.send({ user, token })
        } catch (error) {
            res.status(400).json(error.message);
            console.log(error.message);
        }
    },
    get_info: async (req, res) => {
        info_user = {
            name: req.user.name,
            phone: req.user.phone,
            email: req.user.email,
            id: req.user._id,
            token: req.token
        }
        res.json(info_user);
    },
    logout: async (req, res) => {
        try {
            req.user.tokens = req.user.tokens.filter((token) => {
                return token.token != req.token
            })
            await req.user.save()
            res.send()
        } catch (error) {
            res.status(500).send(error)
        }
    },
    logout_all: async (req, res) => {
        // Log user out of all devices
        try {
            req.user.tokens.splice(0, req.user.tokens.length)
            await req.user.save()
            res.send()
        } catch (error) {
            res.status(500).send(error)
        }
    }
}