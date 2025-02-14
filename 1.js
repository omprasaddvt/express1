app.put('/update/:id', async function (req, res) {
    try {
      const updatedUser = await firstSchema.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      if (!updatedUser) {
        return res.status(404).send('User not found');
      }
      res.json({
        message: 'User updated successfully',
        updatedUser: updatedUser
      });
    } catch (err) {
      console.log('Error updating data:', err);
      res.status(500).send('Error updating data');
    }
  });
  